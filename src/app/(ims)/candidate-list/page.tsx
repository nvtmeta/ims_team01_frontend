import { Avatar, BreadcrumbItem, Breadcrumbs, Chip, Tooltip } from '@nextui-org/react'
import React from 'react'
import Candidate from './Candidate'

const CandidateList = () => {
    const listForms = [
        { name: "aasd", phone: "03242304", updatedData: "" }

    ]

    return (
        <div>

            <Candidate listForms={listForms} />
        </div>
    )
}

export default CandidateList