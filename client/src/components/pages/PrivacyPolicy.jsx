import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGES } from '../../files'

export default function PrivacyPolicy() {
    return (
        <div>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Privacy Policy</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Privacy Policy</span></p>
                </div>
            </div>

            <div className="custom-container px-5 py-30">
                {/* Privacy Policy */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Privacy Policy</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Aenean ullamcorper est est, ac bibendum ipsum tincidunt vehicula. Nulla faucibus vulputate lorem, vitae placerat felis blandit ut. Nam sem quam, euismod sit amet augue et, mollis congue nisi. Vestibulum fringilla lobortis nunc ac tincidunt. Cras nec convallis quam. Maecenas non sem ut enim facilisis rhoncus. Sed odio ex, efficitur ac commodo sed, convallis vitae lectus. Aenean at urna ac tellus ullamcorper pretium. Aliquam erat volutpat. Aliquam sit amet tellus in tortor posuere convallis quis nec tellus. Nulla eu mauris sit amet enim eleifend congue. Quisque aliquam, turpis quis elementum tempus, velit arcu dignissim dui, a vehicula lectus nisi non felis.
                    </p>
                </section>
                {/* Collect Information */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Collect Information</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Donec ac pulvinar diam, ac mollis augue. Etiam interdum fringilla magna, at placerat libero malesuada sed. Proin tincidunt a sapien at facilisis. Cras nec lectus pretium, convallis tellus eu, placerat augue. Curabitur luctus odio efficitur elit volutpat, quis venenatis tellus vestibulum. Nam ultrices massa id tellus commodo, at mollis elit mattis. Etiam eget ultrices lectus, at faucibus mauris. Integer at mauris ex. Vivamus interdum cursus mi quis venenatis. Sed pulvinar efficitur quam quis congue. Ut vel ornare lorem. Vivamus mi mi, vestibulum nec eleifend eu, lobortis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue dui, non rutrum enim ultrices vel. Fusce mattis ullamcorper nisl, sit amet venenatis odio tincidunt eget.
                    </p>
                </section>
                {/* Usage of Information */}

                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Usage of Information</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[26px]">
                        Phasellus commodo venenatis erat, et vestibulum mi fringilla in. Proin elit urna, condimentum ut elit id, imperdiet rutrum orci. Praesent vehicula velit at est rutrum lacinia. Nullam accumsan at tortor in ullamcorper. Proin semper sagittis nisl, vitae finibus nisl maximus non. Cras dictum risus quis augue tempor egestas. Proin luctus fermentum nunc, eget pretium dolor tristique id.
                    </p>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[26px]">
                        Suspendisse hendrerit ex sit amet augue lobortis ullamcorper. Maecenas dignissim facilisis orci, non imperdiet sapien ornare at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Nam ultrices mi mauris, eget tempus massa ornare id. Aenean rhoncus vestibulum diam, ut dapibus dolor vehicula non. Proin rhoncus convallis commodo.
                    </p>
                </section>

                {/* Security Of User Data */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Security Of User Data</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem] mb-[36px]">
                        Integer justo neque imperdiet vitae consequat in vehicula quis dolor orbi lorem leo volutpat a tristique :
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

                {/* Copyright and Security */}
                <section className='mb-[54px]'>
                    <h2 className="text-[28px] text-[var(--dark-color)] font-semibold mb-[23px]">Copyright and Security</h2>
                    <p className="text-[var(--body-text-color)] leading-[1.8rem]">
                        Vestibulum bibendum metus quis purus sagittis ultricies. Vestibulum fringilla urna volutpat eros pharetra consectetur. Integer rutrum eu odio et pulvinar. Sed hendrerit pellentesque faucibus. In venenatis lacus sit amet vehicula efficitur. Suspendisse pulvinar malesuada dui non mollis. Aliquam urna massa, rutrum vel luctus in, facilisis a turpis. Ut aliquet accumsan turpis, eget egestas sem pellentesque nec. Phasellus faucibus congue tempor. Mauris ac massa scelerisque metus pulvinar feugiat in ut leo. Proin congue felis orci. Suspendisse consectetur nisl at faucibus venenatis. Quisque pretium rhoncus dui, porttitor varius mi iaculis nec.
                    </p>
                </section>
            </div>
        </div>
    )
}
