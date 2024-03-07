import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';
const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
	{ className, ...props }: SearchProps,
	ref
) {
	return (
		<div className={styles['input-wrapper']}>
			<input {...props} ref={ref} className={cn(className, styles['input'])} />
			<img className={styles['icon']} src='/search-icon.svg' alt='Search' />
		</div>
	);
});

export default Search;
