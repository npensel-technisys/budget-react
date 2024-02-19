import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({size="tiny", color='black', tittle="Default tittle", value="0.00"}){
    return(
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance 
                        size='tiny' color='green' tittle='Income:' value='1253.54'>
                        </DisplayBalance>
                    </Grid.Column>

                    <Grid.Column>
                        <DisplayBalance 
                            size='tiny' color='red' tittle='Expenses:' value='623.50'>
                        </DisplayBalance>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances