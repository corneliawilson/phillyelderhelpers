export const RESET_ERRORS = 'RESET_ERRORS';


export function reset(name){	
	return {
		type: RESET_ERRORS,
		name
	}
}
