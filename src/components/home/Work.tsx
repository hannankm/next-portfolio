import Link from 'next/link'
export default function Work () {
    return (
    <div className="h-screen bg-pink-500">
        <h1>Some of my Work</h1>
        {/* featured project 1 full screen*/}
        {/* featured project 2 */}
        {/* featured project 3 */}
        <h1>Other Noteworthy Projects</h1>
        {/* grid of projects */}
        <button><Link href='projects'> See More</Link></button>
    </div>)
}
