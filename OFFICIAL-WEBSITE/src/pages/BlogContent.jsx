import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

export const BlogContent = () => {
  const { name } = useParams();

  return (
    <div className="mt-36 px-16 flex flex-col gap-16 w-full max-w-7xl">
      <h5 className="text-[20px]">
        <span className="text-[#28252480]">Blog &gt;</span> {name}
      </h5>
      <div className=" mx-auto flex flex-col gap-4">
        <h5 className="font-bold hero">
          Lorem ipsum dolor sit amet, consecte adipisci elit, lorem ispum
        </h5>
        <p>
          <span className="text-[#2D5283]">By Ireoluwa Adeoluwa</span> - March
          21 2024
        </p>
        <p className="text-[#697D95]">Share this publication</p>
        <div className="flex gap-4 text-xl">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-8">
          <p className="text-[14px] text-[#697D95]">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure.
          </p>
          <p className="text-[14px] text-[#697D95]">
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a
            pleasure that has no annoying consequences, or one who avoids a pain
            that produces no resultant pleasure?
          </p>
        </div>
        <h5 className="font-bold">1914 translation by H. Rackham</h5>
        <p className="text-[14px] text-[#697D95]">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains.
        </p>
        <h5 className="font-bold">Innovative Solutions Shaping the Industry</h5>
        <div className="space-y-8">
          <p className="text-[14px] text-[#697D95]">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
          <p className="text-[14px] text-[#697D95]">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure.
          </p>
        </div>
        <h5 className="font-bold">Regulatory Considerations</h5>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[14px] text-[#697D95]">
              1. Compliance and Risk Management: Financial intermediaries must
              navigate complex regulatory landscapes, ensuring compliance while
              managing risks associated with new technologies.
            </p>
            <p className="text-[14px] text-[#697D95]">
              2. Consumer Protection: Regulators focus on protecting consumers
              in the digital age, emphasizing transparency, data security, and
              fair practices.
            </p>
            <p className="text-[14px] text-[#697D95]">
              3. Global Coordination: Harmonizing regulations across
              jurisdictions is critical to managing the global nature of digital
              finance and cross-border transactions.
            </p>
          </div>
          <p className="text-[14px] text-[#697D95]">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain.
          </p>
        </div>
      </div>
    </div>
  );
};
