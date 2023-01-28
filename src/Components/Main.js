import './styles/main.css'
import peopleStock from './images/people_stock.webp'

const main = () => {
    return (
        <main>
            <section>
                <img src={peopleStock} alt="Siedzący ludzie przy stole w restauracji" />
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra aliquam leo quis luctus. Praesent et pretium ex. Proin eu dictum lectus. Ut risus mi, pulvinar vitae euismod dignissim, iaculis ac nibh. Curabitur malesuada est tristique lacus blandit vehicula vel nec mi. Nam id condimentum lacus. Mauris varius ex ac lacus laoreet volutpat. Vivamus a leo vitae libero malesuada elementum. Praesent lacinia vestibulum tempor. Aenean elit dui, commodo at diam ac, vulputate faucibus risus. Aliquam interdum, nulla ut consequat vulputate, quam enim tempor nibh, eget egestas velit nibh nec orci. In eleifend nisl viverra, laoreet erat a, hendrerit enim. Nulla at urna vitae velit lacinia ullamcorper at at elit. <br /><br /> Pellentesque blandit iaculis ipsum, vel accumsan arcu lacinia ac. Sed lacinia odio quis diam dictum, ut euismod libero sagittis. Phasellus id odio a nulla fermentum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla sem ante, quis convallis tortor mollis vel. Vivamus consectetur viverra consectetur. Pellentesque vel ipsum ac arcu tincidunt elementum. Donec posuere finibus lorem, et ultricies massa accumsan eget. Donec vitae velit porttitor, aliquet neque at, condimentum sapien. Vestibulum vitae malesuada nisi. Mauris eget nunc eu turpis ultricies sagittis ac tempor sapien.<br /></p>
            </section>
        </main>
    )
}

export default main