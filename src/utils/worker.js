// worker.js
importScripts('https://cdn.jsdelivr.net/npm/@xenova/transformers@0.4.3');
//import { AutoModel, AutoProcessor, env, RawImage } from '@xenova/transformers';
import transformers from '@xenova/transformers';
// Initialize variables
let model, processor;

// Initialize model and processor
async function initializeModel() {
  model = await transformers.AutoModel.from_pretrained('briaai/RMBG-1.4', {
    config: { model_type: 'custom' },
  });

  processor = await transformers.AutoProcessor.from_pretrained('briaai/RMBG-1.4', {
    config: {
      do_normalize: true,
      do_pad: false,
      do_rescale: true,
      do_resize: true,
      image_mean: [0.5, 0.5, 0.5],
      feature_extractor_type: 'ImageFeatureExtractor',
      image_std: [1, 1, 1],
      resample: 2,
      rescale_factor: 0.00392156862745098,
      size: { width: 1024, height: 1024 },
    },
  });
}

// Initialize the model immediately
initializeModel();

// Predict function
async function predict(url) {
  const image = await transformers.RawImage.fromURL(url);

  const { pixel_values } = await processor(image);

  const { output } = await model({ input: pixel_values });

  const mask = await transformers.RawImage.fromTensor(output[0].mul(255).to('uint8')).resize(
    image.width,
    image.height
  );

  const canvas = new OffscreenCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(image.toCanvas(), 0, 0);

  const pixelData = ctx.getImageData(0, 0, image.width, image.height);
  for (let i = 0; i < mask.data.length; ++i) {
    pixelData.data[4 * i + 3] = mask.data[i];
  }
  ctx.putImageData(pixelData, 0, 0);

  return canvas.convertToBlob({ type: 'image/png' });
}

onmessage = async (e) => {
  const { url } = e.data;
  const blob = await predict(url);
  postMessage({ blob });
};
