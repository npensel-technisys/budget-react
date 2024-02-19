import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
    return(
        <Container>

            <MainHeader tittle='Budget2'></MainHeader>

            <DisplayBalance size="small" tittle="Your balance:" value="2,250.53"></DisplayBalance>

            <DisplayBalances></DisplayBalances>

            <MainHeader tittle="History" type="h3"></MainHeader>

            <EntryLine color="green" description='First income' value="$500"></EntryLine>
            <EntryLine color="red" description='Something' value="$120"></EntryLine>
            <EntryLine color="green" description='Second income' value="$99.99"></EntryLine>
            <EntryLine color="red" description='Another expense' value="$120"></EntryLine>
            <EntryLine></EntryLine>

            <MainHeader tittle="Add new transaction" style="h3"></MainHeader>
            <NewEntryForm></NewEntryForm>
        </Container>
    )
}

export default App;
