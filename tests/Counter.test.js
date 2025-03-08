import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
  test('renders with default initial value', () => {
    const { getByTestId } = render(<Counter />);
    const counterValue = getByTestId('counter-value');
    expect(counterValue.props.children).toBe(0);
  });

  test('renders with custom initial value', () => {
    const { getByTestId } = render(<Counter initialValue={5} />);
    const counterValue = getByTestId('counter-value');
    expect(counterValue.props.children).toBe(5);
  });

  test('increments the counter when increment button is pressed', () => {
    const { getByTestId } = render(<Counter initialValue={0} />);
    const incrementButton = getByTestId('increment-button');
    const counterValue = getByTestId('counter-value');
    
    // Initial value
    expect(counterValue.props.children).toBe(0);
    
    // Press increment button
    fireEvent.press(incrementButton);
    expect(counterValue.props.children).toBe(1);
    
    // Press again
    fireEvent.press(incrementButton);
    expect(counterValue.props.children).toBe(2);
  });

  test('decrements the counter when decrement button is pressed', () => {
    const { getByTestId } = render(<Counter initialValue={5} />);
    const decrementButton = getByTestId('decrement-button');
    const counterValue = getByTestId('counter-value');
    
    // Initial value
    expect(counterValue.props.children).toBe(5);
    
    // Press decrement button
    fireEvent.press(decrementButton);
    expect(counterValue.props.children).toBe(4);
    
    // Press again
    fireEvent.press(decrementButton);
    expect(counterValue.props.children).toBe(3);
  });

  test('respects minimum value constraint', () => {
    const { getByTestId } = render(<Counter initialValue={1} minValue={0} />);
    const decrementButton = getByTestId('decrement-button');
    const counterValue = getByTestId('counter-value');
    
    // Initial value
    expect(counterValue.props.children).toBe(1);
    
    // Press decrement button
    fireEvent.press(decrementButton);
    expect(counterValue.props.children).toBe(0);
    
    // Press again - should not go below minValue
    fireEvent.press(decrementButton);
    expect(counterValue.props.children).toBe(0);
  });

  test('respects maximum value constraint', () => {
    const { getByTestId } = render(<Counter initialValue={9} maxValue={10} />);
    const incrementButton = getByTestId('increment-button');
    const counterValue = getByTestId('counter-value');
    
    // Initial value
    expect(counterValue.props.children).toBe(9);
    
    // Press increment button
    fireEvent.press(incrementButton);
    expect(counterValue.props.children).toBe(10);
    
    // Press again - should not go above maxValue
    fireEvent.press(incrementButton);
    expect(counterValue.props.children).toBe(10);
  });

  test('button visually indicates when constraints are met', () => {
    const { getByTestId } = render(<Counter initialValue={5} minValue={5} maxValue={5} />);
    const incrementButton = getByTestId('increment-button');
    const decrementButton = getByTestId('decrement-button');
    
    // Both buttons should have the disabled style
    expect(incrementButton).toHaveStyle({backgroundColor: '#B0C4DE'});
    expect(decrementButton).toHaveStyle({backgroundColor: '#B0C4DE'});
  });
});