"use client"
import React from 'react';
import {Container, Flex} from "@chakra-ui/react";
import {pricing} from "@/component/Data/Lists";
import PricingComponent from "@/component/subComponents/PricingComponent";

function Pricing() {
    return (
        <Container maxW={'container.md'}>
            <Flex className='gap-4'>
                {pricing.map((price, index) => (
                     <PricingComponent className={`${index === 1 ? 'bg-green-300' : ''}`} key={price.id} {...price} />
                ))}
            </Flex>
        </Container>
    );
}

export default Pricing;
