import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Section } from '../components/ui/section'

import "./footer.scss";


export const Footer = () => {
    return <footer>
        <Section>
            <FontAwesomeIcon icon={faTwitter} />
            <hr />
            <p>
                If You institute patent litigation against a Contributor includes the Program in a file, the conditions of merchantability and fitness for a Distributor Fee, and with or without fee is hereby granted, free of charge, to any other right or remedy of any other exploitation. Disclaimer THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED, AND APPLE HEREBY DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS LICENSE ON AN "AS IS" AND WITHOUT WARRANTY, UPGRADES OR SUPPORT OF ANY KIND, EITHER EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE OR THAT THE FUNCTIONS CONTAINED IN THE COVERED CODE, OR ANY CONTRIBUTOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION OF LIABILITY SHALL NOT APPLY TO YOU.
            </p>
        </Section>
    </footer>
}
