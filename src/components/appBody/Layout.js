import styled from 'styled-components';
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import Widgets from './Widgets';

function Layout() {
    return (
        <Container>
            <Sidebar/>
            <Feeds/>
            <Widgets/>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    padding-top: 80px;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
        margin: 5px 20px;
    }
    @media (max-width: 1200px) {
        margin-left: 30px;
        grid-template-areas: "leftside rightside";
        grid-template-columns: minmax(0, 5fr) minmax(0, 12fr);
    }
`;

export default Layout;