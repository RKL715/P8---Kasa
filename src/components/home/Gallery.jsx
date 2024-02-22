import Card from "./Card.jsx";

function Gallery (titreLocation) {
    return (
        <div className={'gallery-background'}>
            <div className={'gallery'}>
                <Card title={'Lorem Ipsum'} alt="random" image="https://picsum.photos/200/300" />
                <Card title={'Lorem Ipsum'} alt="random" image="https://picsum.photos/200/300" />
                <Card title={'Lorem Ipsum'} alt="random" image="https://picsum.photos/200/300" />
                <Card title={'Lorem Ipsum'} alt="random" image="https://picsum.photos/200/300" />
                <Card title={'Lorem Ipsum'} alt="random" image="https://picsum.photos/200/300" />
                <Card title={'Lorem Ipsum'} alt="random" image="https://picsum.photos/200/300" />
            </div>
        </div>
    )
}



export default Gallery;