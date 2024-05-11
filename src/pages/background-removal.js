import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { AutoModel, AutoProcessor, env, RawImage } from '@xenova/transformers';
import TopNavbar from '@/components/layout/navbar';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { createRoot } from 'react-dom/client';
import CTA from '@/components/ui/cta';
import Footer2 from "../components/CommonComponents/Footer2";
import Layout from "../components/CommonComponents/Layout";
import { NextSeo } from "next-seo";
import Head from 'next/head';

// Since we will download the model from the Hugging Face Hub, we can skip the local model check
env.allowLocalModels = false;

// Proxy the WASM backend to prevent the UI from freezing
env.backends.onnx.wasm.proxy = true;



const EXAMPLE_URL = 'https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=1024';


const BgRemoval = () => {
    const containerRef = useRef(null);
    const [loadingText, setLoadingText] = useState('');
    const [bgRemoved, setBgRemoved] = useState(false);
    const model = useRef();
    const processor = useRef();
    const sampleImage = [
        { id: 1, url: "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Seo%20Content/Jewellery%20Photography/unstudio-image-out-0.png?updatedAt=1715184544293" },
        { id: 2, url: "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Seo%20Content/Cosmetics%20Photography/unstudio-image-out-14.png?updatedAt=1715158515550" },
        { id: 3, url: "https://ik.imagekit.io/ei5bqbiry/Landing%20Page/Seo%20Content/Food%20Photography/unstudio-image-out-7.png?updatedAt=1715072872741" },
    ]


    const initliazeModel = async () => {
        model.current = await AutoModel.from_pretrained('briaai/RMBG-1.4', {
            // Do not require config.json to be present in the repository
            device: "webgpu",
            dtype: "fp32", // TODO: add fp16 support
            config: { model_type: 'custom' },
        });

        processor.current = await AutoProcessor.from_pretrained('briaai/RMBG-1.4', {
            // Do not require config.json to be present in the repository
            config: {
                do_normalize: true,
                do_pad: false,
                do_rescale: true,
                do_resize: true,
                image_mean: [0.5, 0.5, 0.5],
                feature_extractor_type: "ImageFeatureExtractor",
                image_std: [1, 1, 1],
                resample: 2,
                rescale_factor: 0.00392156862745098,
                size: { width: 1024, height: 1024 },
            }
        });
    }

    useEffect(() => {
        initliazeModel();
    }, [])


    async function predict(url) {
        const image = await RawImage.fromURL(url);

        // Update UI
        containerRef.current.innerHTML = '';
        containerRef.current.style.backgroundImage = `url(${url})`;

        // Set container width and height depending on the image aspect ratio
        const ar = image.width / image.height;
        const [cw, ch] = (ar > 720 / 480) ? [720, 720 / ar] : [480 * ar, 480];
        console.log(cw, ch)
        containerRef.current.style.width = `${cw}px`;
        containerRef.current.style.height = `${ch}px`;
        setLoadingText("Removing...")



        // Preprocess image
        console.time('preprocess');
        const { pixel_values } = await processor.current(image);
        console.timeEnd('preprocess');
        // Predict alpha matte
        console.time('predict');
        const { output } = await model.current({ input: pixel_values });
        console.timeEnd('predict');
        // Resize mask back to original size
        console.time('resize')
        const mask = await RawImage.fromTensor(output[0].mul(255).to('uint8')).resize(image.width, image.height);
        console.timeEnd('resize');
        // Create new canvas
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');

        // Draw original image output to canvas
        ctx.drawImage(image.toCanvas(), 0, 0);

        // Update alpha channel
        console.time('update alpha channel');
        const pixelData = ctx.getImageData(0, 0, image.width, image.height);
        for (let i = 0; i < mask.data.length; ++i) {
            pixelData.data[4 * i + 3] = mask.data[i];
        }
        ctx.putImageData(pixelData, 0, 0);
        console.timeEnd('update alpha channel');
        // UI
        containerRef.current.append(canvas)
        containerRef.current.style.background = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURb+/v////5nD/3QAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAUSURBVBjTYwABQSCglEENMxgYGAAynwRB8BEAgQAAAABJRU5ErkJggg==")`;
        setBgRemoved(true);
        setLoadingText("Completed...")
    }

    const onDrop = useCallback(acceptedFiles => {

        const file = acceptedFiles[0];
        console.log(file)
        if (!file) {
            return;
        }

        const reader = new FileReader();

        // Set up a callback when the file is loaded
        reader.onload = e2 => predict(e2.target.result,);

        reader.readAsDataURL(file);

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop,accept: {
        'image/*': ['.jpg', '.jpeg', '.png',  '.webp', ],
      }, })

    const handleDownload = () => {
        const child = containerRef.current.children;
        if (child[0].nodeName !== 'CANVAS') return;
        let base64 = child[0]?.toDataURL();
        const downloadLink = document.createElement("a");
        downloadLink.href = base64;
        downloadLink.download = "unstudio_bgremoved";
        downloadLink.click();
    }

    const handleTryAgain = () => {
        containerRef.current.innerHTML = '';
        containerRef.current.style.background = '';
        containerRef.current.style.width = `100%`;
        containerRef.current.style.height = `100%`;
        setLoadingText('');
        setBgRemoved(false);
        const root = createRoot(containerRef.current);
        root.render(
            <div className='w-full min-h-[40vh] md:min-h-[50vh]  h-full  flex items-center justify-center' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p className='font-poppin'>Drop the files here ...</p> :
                        <div className='border-3 flex items-center gap-3 rounded-md p-4 font-poppin border-dashed border-primary-green'>
                            <img src='/add.svg' />
                            <p className='text-xs md:text-base'>Click to upload an image</p>
                        </div>
                }
            </div>
        );
    }

    const handleSampleClick = (url) => {
        predict(url)
    }
    let pageURL = "https://unstudio.ai/background-removal";
    return (
        <>
        <Head>
        <title>Fastest Background Removal | Free & High-Resolution | No Signup Required</title>
        <meta
          name="description"
          content="Fastest background removal online! High-resolution results, completely free, no sign up needed. Remove backgrounds in one second and elevate your images today!"
        />
        <meta
          name="keywords"
          content="background removal, free background remover, high resolution, no signup, instant removal, photo editing, online tool"
        />
        <link rel="canonical" href={pageURL} />
        <meta property="og:title" content="Instant Background Removal | Free & High-Resolution" />
        <meta
          property="og:description"
          content="Remove backgrounds from your images instantly with our free, no signup required tool. Achieve super high-resolution results effortlessly."
        />
        <meta property="og:url" content={pageURL} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instant Background Removal | Free & High-Resolution | No Signup Required" />
        <meta
          name="twitter:description"
          content="Get super high-resolution images with our free, fast background removal tool. No signup required. Try it now!"
        />
        {/* <meta name="twitter:image" content={ogImage} /> */}
        <meta name="twitter:url" content={pageURL} />
      </Head>
      <NextSeo
        title="Create Stunning Product Visuals using AI, instantly | Unstudio"
        description="Unstudio uses AI to create stunning visuals for your products for marketing, social media, website and more, instantly. No Photoshoots required."
        canonical={pageURL}
        instagram={{
          handle: '@unstudio.ai',
          site: '@unstudio.ai',
          cardType: 'summary_large_image',
        }}
        linkedin={{
          handle: '@unstudio.ai',
          site: '@unstudio.ai',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          url: pageURL,
          title: 'Create Stunning Product Visuals using AI, instantly | Unstudio',
          description:
            'Unstudio uses AI to create stunning visuals for your products for marketing, social media, website and more, instantly. No Photoshoots required.',
          site_name: 'Create Stunning Product Visuals using AI, instantly | Unstudio',
        }}
      ></NextSeo>
        <div className="bg-main h-full w-full  relative main-container">
            <Layout>
            <div className=" max-w-[1750px] h-full mx-auto">
                <TopNavbar />

                <div className='w-full flex flex-col items-center justify-center'>
                    <h1 className='text-3xl md:text-5xl text-center font-poppin mt-12'>Unstudio's background remover.</h1>
                    <h2 className='text-xl md:text-xl font-poppin text-center mt-6 mb-16'>Erase backgrounds from your images at no cost <span className='font-bold'>(it's free!)</span>.</h2>

                    <div className='flex items-center relative justify-center gap-4 w-8/12 md:w-1/2  h-full'>

                        <div id='container-image' ref={containerRef} className='w-full min-h-[40vh] md:min-h-[50vh] h-full  border-4 border-dashed border-[#373737] flex justify-center items-center rounded-md '>
                            <div className='w-full min-h-[40vh] md:min-h-[50vh] cursor-pointer  h-full  flex items-center justify-center' {...getRootProps()}>
                                <input type='file' accept='image/*' multiple={false} {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p className='font-poppin'>Drop the files here ...</p> :
                                        <div className='border-3 cursor-pointer flex items-center gap-3 rounded-md p-4 font-poppin border-dashed border-primary-green'>
                                            <img src='/add.svg' />
                                            <p className='text-xs md:text-base'>Click to upload an image</p>
                                        </div>
                                }
                            </div>
                        </div>

                        <div className='border-2 p-1 absolute top-[50%] -translate-y-1/2 -right-32 rounded-md border-[#373737]'>
                            {sampleImage.map((item) => (
                                <img src={item.url} onClick={()=>handleSampleClick(item.url)} key={item.id} className='w-24 h-24 my-1 object-cover cursor-pointer' />
                            ))}
                        </div>
                    </div>
                    <h1 className='font-poppin text-center my-2'>{loadingText}</h1>
                    {bgRemoved && 
                    <div className='flex items-center gap-5 mt-6'>
                        <Button className='bg-primary-green hover:bg-black hover:text-white border border-primary-green' onClick={handleTryAgain}>Try-again</Button>
                        <Button className='bg-primary-green hover:bg-black hover:text-white border border-primary-green' onClick={handleDownload}>Download</Button>
                    </div>}
                </div>
                <div className='relative w-full'>
                    <img className='w-full' src='https://ik.imagekit.io/ei5bqbiry/misc/Frame%20474.png?updatedAt=1714572654126' />
                    <div className='absolute top-1/2 left-1/2 z-20 -translate-y-[40%]  -translate-x-1/2 w-full '>
                        <CTA />
                    </div>
                </div>

                <Footer2 />

            </div>
            </Layout>

        </div>
        </>
    )
}

export default BgRemoval