import Link from 'next/link'
export default function Work () {
    return (
    <div className="h-screen bg-pink-500">
        <h1>Some of my Work</h1>
        <button><Link href='projects'> See More</Link></button>
    </div>)
}