import {Box} from '@sanity/ui'

const Row = ({value, readOnly, type, onChange}) => {
    return (
        <Box padding={4} style={{display: 'flex', flexDirection: 'row'}}>
            {value.map((image, index) => {
                return (
                    <Box key={index} style={{marginRight: '10px'}}>
                        <img src={image.asset.url} style={{width: '100px', height: '100px'}} />
                        {readOnly ? null : <button onClick={() => {
                            const newValue = value.filter((_, i) => i !== index)
                            onChange(newValue)
                        }}>Remove</button>}
                    </Box>
                )
            }
            )}
            {readOnly ? null : <button onClick={() => {
                const newValue = value.concat([{_type: 'image', asset: {}}])
                onChange(newValue)
            }}>Add image</button>}
        </Box>
    )
}

export default Row