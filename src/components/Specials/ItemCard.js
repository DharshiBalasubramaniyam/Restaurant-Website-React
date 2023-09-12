import './Specials.css';

function ItemCard(props) {
    console.log(props.item);
    const {id, name, image} = props.item;
    return (
        <div className='card' key={id}>
            <div className='image'>
                <img src={image}></img>
                <div className='overlay'>
                    <button>Explore Menu</button>
                </div>
            </div>
            <div className='name'>{name}</div>
        </div>
    );
}

export default ItemCard;