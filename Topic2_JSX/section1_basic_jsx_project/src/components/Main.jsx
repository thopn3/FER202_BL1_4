import mainData from "./data.json";

// Su dung co phap Function de dinh nghia Component
function Main(){
    // Lay du lieu cua products
    const products = mainData?.products;
    return (
        <main>
            <aside>Left content</aside>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th><th>Price</th><th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(p => (
                                <tr key={p?.id}>
                                    <td>{p?.id}</td>
                                    <td>{p?.name}</td>
                                    <td>{p?.price}</td>
                                    <td>{p?.category}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Main;