import {React, useState, useEffect} from 'react'
import * as d3 from 'd3'
import {getColName, getGeoJSONLink} from '../../HelperFunctions/Indexing'
import ChartSection from './ChartSection'
import {MainContainer} from './Style'
import MapSection from './MapSection'


const Dashboard = () => {
    const [boundary, setBoundary] = useState("schoolDistricts") 
    const [index, setIndex] = useState(null)  
    const [count, setCount] = useState(null)
    const [year, setYear] = useState(2020)

    const colName = boundary == "boroughs" ? getColName(boundary).name : getColName(boundary)

    const handleBoundaryClick = (d) => {
        setIndex(d[colName])
        setCount(d['CrimeCount_' + year])
    }

    const handleBoundaryChange = (b) => {
        setBoundary(b)
        setIndex(null)
        setCount(null)
    }

    const handleYearChange = (y, c) => {
        setYear(y)
        setCount(c)
    }
    
    return (
    <MainContainer>
                
        <MapSection year={year} boundary={boundary} index={index}
                    onBoundaryClick={handleBoundaryClick} 
                    onBoundaryChange={handleBoundaryChange} 
                    onYearChange={handleYearChange}>            
        </MapSection>
        
        <ChartSection year={year} boundary={boundary} index={index} count={count}></ChartSection>
            
    </MainContainer>)
    
}
 
export default Dashboard;