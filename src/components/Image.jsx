
export const Image = (({ src, name, width, height }) => {
    return (
        <img style={{
            objectFit: "cover",
            padding: "1rem",
            borderRadius: "1rem"
        }}
            src={src}
            width={width}
            height={height}
            alt={name} />
    )
})