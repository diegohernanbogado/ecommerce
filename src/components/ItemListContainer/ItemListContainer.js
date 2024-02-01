const ItemListContainer = ({greeting}) => {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <h1 className="title">{greeting}</h1>
            </div>
        </section>
    )
}

export default ItemListContainer;