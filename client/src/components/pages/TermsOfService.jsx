import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGES } from '../../files'

export default function TermsOfService() {
    return (
        <div>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Terms of Service</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Terms of Service</span></p>
                </div>
            </div>

            <div className="custom-container px-5 py-30">
                {/* performance */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Our Performance</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Sed ac sollicitudin ipsum. Vivamus vulputate, enim sit amet aliquet lacinia, ex mauris aliquam elit, vel pharetra augue arcu ultricies magna. Suspendisse justo erat, dignissim ut imperdiet ut, convallis vitae urna. Vivamus tincidunt lacinia metus sed suscipit. Phasellus luctus rhoncus mauris ut euismod. Aliquam elementum malesuada erat, vitae bibendum ex rutrum eget. Mauris sed nunc mauris. Curabitur semper sed justo a pellentesque. In hac habitasse platea dictumst. Mauris semper volutpat iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur consectetur dignissim nulla id ornare. Praesent placerat dolor vitae tellus lacinia, a malesuada est sodales. Praesent at consectetur sem, sed scelerisque arcu. Maecenas malesuada lorem id sagittis scelerisque. In hac habitasse platea dictumst.
                    </p>
                </section>
                {/* cookies */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Cookie</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Pellentesque sit amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel metus vehicula, consequat velit a, eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus eleifend porta fermentum. Pellentesque posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate ex posuere eget.
                    </p>
                </section>
                {/* payment */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Payment</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel metus vehicula, consequat velit a, eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus eleifend porta fermentum. Pellentesque posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate ex posuere eget.
                    </p>
                </section>
                {/* Refund */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Refund Policy</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[26px]">
                        Donec ut vestibulum sem, in faucibus mauris. Nulla et luctus nulla. Vestibulum consectetur nisi nec lobortis pretium. Fusce dignissim in sem in bibendum. Vivamus fermentum massa et egestas gravida. Suspendisse at vulputate ante, id tempus nunc. Curabitur sed dolor a elit ornare commodo. Curabitur blandit enim nulla, ornare suscipit risus pretium ut. Nullam rhoncus, sem eget dapibus elementum, purus dolor rutrum magna, nec laoreet odio sapien sit amet erat.
                    </p>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[26px]">
                        Proin non ante purus. Donec ante enim, semper vel mauris at, rutrum blandit mauris. Vivamus at ante sit amet leo consequat viverra quis at odio. Proin arcu magna, placerat sed lorem id, rutrum convallis ante.
                    </p>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Nam venenatis vestibulum mauris ut viverra. Ut porta consequat lorem a ullamcorper. In et arcu quam. Nunc tristique justo nec lectus ornare placerat. Nulla ut fringilla mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </p>
                </section>

                {/* hyperlinking to our content */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Hyperlinking to our Content</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[36px]">
                        Amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. 
                    </p>

                    <ol type='1' className='text-[var(--body-text-color)] flex flex-col gap-y-5'>
                        <li>1. Ut scelerisque hendrerit venenatis</li>
                        <li>2. Proin fermentum lacus nec augue blandit placerat</li>
                        <li>3. Ut vestibulum elit justo suscipit sem ultricies</li>
                        <li>4. Integer fermentum vitae magna in condimentum</li>
                        <li>5. Integer fermentum vitae magna in condimentum dsf</li>
                        <li>6. Integer fermentum vitae magna in condimentum</li>
                    </ol>
                </section>

                {/* disclaimer */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Disclaimer</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Donec facilisis consequat nisi. Vivamus euismod at ipsum a gravida. Quisque vitae augue maximus elit iaculis tincidunt. Quisque dapibus dui non justo iaculis volutpat. Phasellus vulputate tempus lorem vitae vehicula. Maecenas interdum venenatis ante, scelerisque porta nibh mollis vitae. Curabitur in erat porttitor, imperdiet lectus non, porttitor odio. Donec efficitur efficitur dapibus. Aenean sit amet tortor id lorem ultricies rhoncus. Etiam ornare eros eu commodo vehicula. Curabitur vel enim eget velit tincidunt viverra eu in risus. Aliquam suscipit tellus eu fermentum facilisis. Pellentesque volutpat posuere ligula. Fusce et consequat mi.
                    </p>
                </section>
            </div>
        </div>
    )
}
