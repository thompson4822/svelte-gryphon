import { render, RenderResult } from '@testing-library/svelte';
import PersonCard from './PersonCard.svelte';

describe('PersonCard', function() {
	let renderedComponent: RenderResult;

	beforeEach(() => {
		renderedComponent = render(PersonCard);
	});

	describe('once the component has been rendered', () => {

		test('should show title for the People component', () => {
			expect(renderedComponent.getByText('Customers')).toBeInTheDocument();
		});


	});

});