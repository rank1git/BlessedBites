const Item = ({ title, children, isActive, onShow }) => {
	return (
		<section className="Term">
			<h3>{title}</h3>
			{isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
		</section>
	);
};

export default Item;