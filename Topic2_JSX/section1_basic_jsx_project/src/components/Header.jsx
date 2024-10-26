const headerData = ["Home", "Shop", "About Us", "Contact"];

// Su dung co phap Function de dinh nghia Component
function Header(){
    return (
        <header>
            <ul>
                {
                    headerData?.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </header>
    );
}

export default Header;