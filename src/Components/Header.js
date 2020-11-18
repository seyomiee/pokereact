import styled from "styled-components";
import { Link } from "react-router-dom";

const Header= styled.header``;

const List = styled.ul`
    display: flex;
`;

const Item  = styled.li``;

const SLink= styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">Home</SLink>
            </Item>
        </List>
    </Header>
)