import React from 'react';
import './index.scss';
import { Hero, HeroContent } from '../components/ui/hero';
import { Section } from '../components/ui/section';

export const Index = () => 
    <Section top>
        <Hero>
            <HeroContent>
                <h1>Get out there!</h1>
                <h2>Except for the Whole Covid Thing...</h2>
            </HeroContent>
        </Hero>
    </Section>