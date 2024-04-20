import { Avatar, BreadcrumbItem, Breadcrumbs, Chip, Tooltip } from '@nextui-org/react'
import React from 'react'
import Candidate from './Candidate'

const CandidateList = () => {
    const listForms = [
        { name: "aasd",email:"thinhdeptrai@gmail.com", phone: "03242304",current_position: "Developer",
        owner_hr:"thinhdeptrai1", status:"Waiting for interview" ,action: "" }

    ]

    return (
        <div>

            <Candidate listForms={listForms} />
        </div>
    )
}

export default CandidateList