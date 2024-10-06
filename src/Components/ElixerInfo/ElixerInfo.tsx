import { Accordion, Col, Container, Figure, Row, Table } from "react-bootstrap"

//As this is a static component, it was simple to manage.
//I realized after I linked up the entire project that I'd misspelled "elixir" throughout.
//However, I left it as is rather than going back through to every place this was referred to to fix it.
const ElixerInfo = () => {
    return (
        <Container fluid="md" className="bg-secondary-subtle border border-secondary p-2">
            <Row>
            <Col md={6}>
                <div className="text-center">
                <Figure>
                    <Figure.Image src="https://www.zeldadungeon.net/wiki/images/3/3b/Fireproof_Elixir_-_TotK_icon.png" />
                    <Figure.Caption>The Flameproof buff is unique to elixirs.</Figure.Caption>
                </Figure>
                </div>
                <p>
                    Elixirs are made using at least one monster part and at least one critter.
                    The duration and effectiveness of the buff depend on the tier and number
                    of ingredients used. More monster parts increases the duration, while more
                    critters increases the buff level. Up to five ingredients may be used. 
                    See the accordion below for monster parts. See the table for a list of 
                    critters and their effects.
                </p>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tier 1</Accordion.Header>
                        <Accordion.Body>Bokoblin Horn, Chuchu Jelly, Keese Wing, Ancient Screw,
                            Hinox Toenail, Lizalfos Horn, Moblin Horn, Octorok Baloon, Octorok Tentacle
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Tier 2</Accordion.Header>
                        <Accordion.Body>Bokoblin Fang, Red Chuchu Jelly, White Chuchu Jelly, Yellow Chuchu Jelly,
                             Lizalfos Talon, Fire Keese Wing, Ice Keese Wing, Electric Keese Wing, Moblin Fang,
                             Ancient Shaft, Ancient Gear, Hinox Tooth, Octorok Eyeball</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Tier 3</Accordion.Header>
                        <Accordion.Body>Bokoblin Guts, Keese Eyeball, Lizalfos Tail, Moblin Guts,
                            Ancient Core, Giant Ancient Core
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col md={6}>
                <Table striped className="mt-4">
                    <thead>
                        <tr>
                        <th>Tier</th>
                        <th>Example Ingredients</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flameproof</td>
                            <td>Fireproof Lizard, Smotherwing Butterfly</td>
                        </tr>
                        <tr>
                            <td>Chilly</td>
                            <td>Cold Darner, Winterwing Butterfly</td>
                        </tr>
                        <tr>
                            <td>Spicy</td>
                            <td>Warm Darner, Summerwing Butterfly</td>
                        </tr>
                        <tr>
                            <td>Electro</td>
                            <td>Electric Darner, Thunderwing Butterfly</td>
                        </tr>
                        <tr>
                            <td>Tough</td>
                            <td>Rugged Rhino Beetle</td>
                        </tr>
                        <tr>
                            <td>Mighty</td>
                            <td>Bladed Rhino Beetle</td>
                        </tr>
                        <tr>
                            <td>Hasty</td>
                            <td>Hightail Lizard, Hot-Footed Frog</td>
                        </tr>
                        <tr>
                            <td>Sneaky</td>
                            <td>Sunset Firefly</td>
                        </tr>
                        <tr>
                            <td>Energizing</td>
                            <td>Energetic Rhino Beetle, Restless Cricket</td>
                        </tr>
                        <tr>
                            <td>Enduring</td>
                            <td>Tireless Frog</td>
                        </tr>
                        <tr>
                            <td>Hearty</td>
                            <td>Hearty Lizard</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ElixerInfo