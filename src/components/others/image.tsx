interface ImageInterface{
    image?:string,
    index?:number,
    selectedImg?: number,
    setSelected:any
}

export const Image = ({image, index, selectedImg, setSelected} : ImageInterface) => {
    return( 
        <img src={`http://localhost:8080/images/pets/${image}`} onMouseEnter={() => setSelected?.(index)}  alt="Imagem pet" className={`rounded w-[100px] h-[100px] object-cover mx-auto cursor-zoom-in ${selectedImg === index ? "border-4 border-yellow-300" : ""} `} />
    )
}