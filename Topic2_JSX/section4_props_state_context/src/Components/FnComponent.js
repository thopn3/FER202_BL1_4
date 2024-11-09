function FnComponent(props){ // props: Properties is a object
    // Phân rã đối tượng props thành 2 thuộc tính tương ứng
    const {name, age} = props;
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default FnComponent;