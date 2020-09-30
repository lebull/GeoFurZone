import React from 'react';
import './index.scss';
import { Hero, HeroContent } from '../components/ui/hero';
import { Section } from '../components/ui/section';
import { conventions } from '../data/cons';
import { Summary } from '../components/ui/summary';

import { Container, Row, Col } from 'react-grid-system';

export const Index = () =>
    <div>
    <Section top>
        <Hero>
            <HeroContent>
                <h1>Get out there!</h1>
                <h2>Except for the Whole Covid Thing...</h2>
            </HeroContent>
        </Hero>
    </Section>
    <Section>
        <Container>
            <Row>
                { conventions.map(con => 
                    <Col sm={12} md={6}>
                        <Summary title={con.name} summary={con.summary} />
                    </Col>
                ) }
            </Row>
        </Container>
    </Section>
    </div>
