import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine({color="black", alignment="left", description="default description", value="defalt value"}){
    return(
        <Segment color={color}>
        <Grid columns={3} textAlign='right'>
            <Grid.Row>
                <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>  
                <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>  
                <Grid.Column width={3}>
                    <Icon name='edit' bordered></Icon>    
                    <Icon name='trash'bordered></Icon> 
                </Grid.Column> 
            </Grid.Row>    
        </Grid>    
    </Segment> 
    )
}

export default EntryLine