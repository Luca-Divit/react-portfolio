const TechPill = ({ name }) => {
  return (
    <div className="rounded-3xl px-3 py-2 bg-[#faebd7] m-1 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-400">
      <p className="text-xs">{name}</p>
    </div>
  )
}

export default TechPill
