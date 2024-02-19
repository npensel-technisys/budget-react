import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({size="tiny", color='black', tittle="Default tittle", value="0.00"}){
    return(
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign:"left"}}>
                {tittle}
            </Statistic.Label>
            <Statistic.Value>
                {value}
            </Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance