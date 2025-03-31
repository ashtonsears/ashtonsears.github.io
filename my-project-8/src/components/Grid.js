import './Grid.css';

function Grid(grid) {
  return (
    <div className="grid_img">
        <img src={grid.image} alt={grid.name}/>
        <h4>{grid.name}</h4>
    </div>
  );
}

export default Grid;
