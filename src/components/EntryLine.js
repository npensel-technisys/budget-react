import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine(
        { 
            id, 
            color="black", 
            alignment="left", 
            description="default description", 
            value="defalt value",
            isExpense=true,
            deleteEntry,
            editEntry
        } 
    ) {
    
    return(
        <Fragment>  
            <Segment color={ isExpense ? "red" : "green" }>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>  
                        <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>  
                        <Grid.Column width={3}>
                            <Icon name='edit' bordered onClick={() => editEntry(id)} ></Icon>    
                            <Icon name='trash'bordered onClick={() => deleteEntry(id)} ></Icon> 
                        </Grid.Column> 
                    </Grid.Row>    
                </Grid>    
            </Segment> 
        </Fragment>
    )
}

export default EntryLine