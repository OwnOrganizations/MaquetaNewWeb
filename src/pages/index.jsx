import CardRazasPerros from "components/componentsCards";

function Index() {
    return(
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros 
                    nombreRaza="Border Collie" 
                    imagen="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80"
                    likes=" 150"
                    comments=" 500"
                    views=" 700"
                />
                <CardRazasPerros 
                    nombreRaza="Rhodesian" 
                    imagen="https://images.unsplash.com/photo-1561053522-1e4ead3277f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
                    likes=" 50"
                    comments=" 80"
                    views=" 100"
                />
                <CardRazasPerros 
                    nombreRaza="Husky" 
                    imagen="https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                    likes=" 750"
                    comments=" 900"
                    views=" 950"
                />
                <CardRazasPerros 
                    nombreRaza="Shitzu" 
                    imagen="https://images.unsplash.com/photo-1437957146754-f6377debe171?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                    likes=" 850"
                    comments=" 700"
                    views=" 900"
                />
            </ul>
        </section>
    )
}

export default Index;