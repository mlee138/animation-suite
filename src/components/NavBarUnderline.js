import styled from 'styled-components';

function NavBarUnderline(){
    return (
        <Nav>
            <p>Animation Suite</p>
            <Ul>
                <li><Link href="#">First Item</Link></li>
                <li><Link href="#">Second Item</Link></li>
                <li><Link href="#">Third Item</Link></li>
            </Ul>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    padding: 1rem 2rem;
    background-color: #5486ce;
    color: white;
    width: 80%;
`;

const Ul = styled.ul`
    display: flex;
    list-style-type: none;
`;

const Link = styled.a`
    position: relative;
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0.5rem;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: white;

        transition: width 0.5s ease-in-out;
    }

    &:hover::before{
        width: 100%;
    }
`;

export default NavBarUnderline;