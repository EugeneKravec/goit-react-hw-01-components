import StatisticList from "./StatisticList"
export default function Statistics({ title }) {
    return <section className="statistics">
        {{ title } && <h2 className="title">Upload stats</h2>}
        {/* <h2 className="title">Upload stats</h2> */}
        <StatisticList />
    </section>
}