const ProjectDetails = () => {
  return (
    <>
      <h2>Create Moodboard</h2>
      <p className="text-muted">
        This is Project Details Page. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nemo officiis quis fugit dolorem, rem repellendus,
        ullam tempore assumenda omnis expedita eligendi ea facere iusto
        explicabo aliquid molestiae incidunt fuga laborum!
      </p>
      <div>
        <span className="border border-50 p-2">Sort By:</span>
        <span className="border border-50 p-2">Priority High-Low</span>
        <span className="border border-50 p-2">Priority Low-High</span>
        <span className="border border-50 p-2">Newest First</span>
        <span className="border border-50 p-2">Oldest First</span>
      </div>
    </>
  );
};
export default ProjectDetails;
