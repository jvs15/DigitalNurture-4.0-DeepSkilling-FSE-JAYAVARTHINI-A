package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        
        calc = new Calculator();
        System.out.println("Setup completed");
    }

    @After
    public void tearDown() {
        
        calc = null;
        System.out.println("Teardown completed");
    }

    @Test
    public void testAdd() {
       
        int a = 10;
        int b = 5;
       
        int result = calc.add(a, b);
       
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        
        int a = 10;
        int b = 3;

        int result = calc.subtract(a, b);

        assertEquals(7, result);
    }
}
