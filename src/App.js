import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
    const [entries, setEntries] = useState (initialEntries);
    const [entryId, setEntryId] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(false);
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [actualBalance, setActualBalance] = useState(0);

    useEffect(() => {
        if(!isOpen && entryId){
            const index =entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries];
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;
            setEntries(newEntries);
            resetEntry();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    useEffect(() => {
        let totalIncomes = 0, totalExpenses = 0;
        
        entries.map((entry) => {
            if(entry.isExpense){
                setTotalExpenses(totalExpenses += Number(entry.value));
            }
            else{
                setTotalIncomes(totalIncomes += Number(entry.value));
            }
        });
        setActualBalance(totalIncomes - totalExpenses);
    }, [entries])

    function resetEntry(){
        setIsExpense(true);
        setValue('');
        setDescription("");
    }

    function deleteEntry(id){
        const result = entries.filter((entry) => entry.id !== id);
        console.log('entries', entries);
        console.log('result', result);
        setEntries(result);
    }

    function editEntry(id){
        console.log('edit entry with id = ', id)
        if(id){
            const index = entries.findIndex(entry => entry.id === id)
            const entry = entries[index]

            console.log('entry.description = ', entry.description)

            setEntryId(id);

            console.log('forms description (before) = ', description) 

            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(true);

            console.log('forms description (after) = ', description)
            console.log('entry.description = ', entry.description)
            console.log('entry.value = ', entry.value)
            console.log('entry.isExpense = ', entry.isExpense)
        }
    }

    function addEntry(){
        const result = entries.concat({
            id: entries.length + 1, 
            description, 
            value,
            isExpense 
            });
            console.log('result', result);
            console.log('entries', entries);
            setEntries(result);
            resetEntry();
    }

    return(
        <Container>

            <MainHeader tittle='Budget'/>

            <DisplayBalance size="small" tittle="Your balance:" value={actualBalance} />

            <DisplayBalances totalIncomes={totalIncomes} totalExpenses={totalExpenses} />

            <MainHeader tittle="History" type="h3" />

            <EntryLines 
                entries={entries} 
                deleteEntry={deleteEntry} 
                editEntry={editEntry}
            />

            <MainHeader tittle="Add new transaction" style="h3" />

            <NewEntryForm 
                addEntry={addEntry}
                description={description} 
                setDescription={setDescription}
                value={value}
                setValue={setValue}
                isExpense={isExpense}          
                setIsExpense={setIsExpense}
            />
            <ModalEdit 
                isOpen = {isOpen} 
                setIsOpen={setIsOpen} 
                description={description} 
                setDescription={setDescription}
                value={value}
                setValue={setValue}
                isExpense={isExpense}          
                setIsExpense={setIsExpense}/>
        </Container>
    )
}

export default App;

var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: "1000.00",
        isExpense: false
    },
    {
        id: 2,
        description: "Water bill",
        value: "20",
        isExpense: true
    },
    {
        id: 3,
        description: "Rent",
        value: "300",
        isExpense: true
    },
    {
        id: 4,
        description: "Power bill",
        value: "50",
        isExpense: true
    }
]
