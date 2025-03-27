import { useState, useEffect, useRef, use } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    CircularProgress

} from '@mui/material';
import { fetchPolicies } from "../api"


const PolicyTable = ({filters }) => {
    const [policies, setPolicies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetchPolicies(filters ? filters : {})
            .then((data) => {
                console.log("DATAAAAA", data)
                setPolicies(data)
            })
            .catch((err) => setError( err.message))
            .finally(() => setLoading(false))
    }, [filters])


    const renderTable = () => {
        return (
            <TableContainer style={{ marginTop: 50}} component={Paper}>
                <TableHead sx={{ border: 3}}>
                    <TableRow sx={{ border: 1 }}>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Premium</TableCell>
                        <TableCell>Coverage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {policies.length > 0 ? (
                        policies.map((p)=>(
                            <TableRow key={p.id}>
                                <TableCell>{p.name}</TableCell>
                                <TableCell>{p.type}</TableCell>
                                <TableCell>{p.premium}</TableCell>
                                <TableCell>{p.coverage}</TableCell>
                            </TableRow>
                        ))
                    ): (
                        <TableRow>
                            <TableCell>
                                Not Found
                            </TableCell>
                        </TableRow>
                    )
                    }
                </TableBody>
            </TableContainer>
        )
    }


    return (
        <div>
            {
                loading ? <CircularProgress /> : error ? <Typography color='error'>{error}</Typography> : renderTable()
            }
            
        </div>

        // <Typography>Hello</Typography>
    )



}


export default PolicyTable