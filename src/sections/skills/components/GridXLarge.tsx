import { mlskills, dataskills, fullstackskills } from '../../../data/skills';
import SkillSection from './SkillSection';

export default function GridXLarge() {
  return (
    <div className="grid grid-cols-7 gap-x-20 gap-y-10">
      <h1 className="text-center font-bold text-3xl text-cream col-span-7 mb-10">
        / SKILLS & CERTS
      </h1>

      <ImageContainer>
        <a
          href="https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/f37ed11bbc74f2d"
          target="_blank"
        >
          <img
            className="rounded-lg grayscale"
            src="/certifications/azure-ai-fundamentals.png"
          />
        </a>
      </ImageContainer>

      <div className="flex flex-col gap-10 col-span-3 row-span-2  p-10 rounded-lg">
        <SkillSection
          title="AI & Machine Learning"
          skills={mlskills}
          align="text-center"
        />
        <SkillSection
          title="Full Stack Dev"
          skills={fullstackskills}
          align="text-center"
        />
        <SkillSection
          title="Data, Cloud and Infra"
          skills={dataskills}
          align="text-center"
        />
      </div>

      <ImageContainer>
        <a
          href="https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/1268f0982a05a191"
          target="_blank"
        >
          <img
            className="rounded-lg grayscale"
            src="/certifications/azure-fundamentals.png"
          />
        </a>
      </ImageContainer>

      <ImageContainer>
        <a
          href="https://www.credly.com/badges/87092f70-1635-41e6-86aa-79654f1303b5/"
          target="_blank"
        >
          <img
            className="w-52 grayscale"
            src="/certifications/aws-machine-learning-specialty.png"
          />
        </a>
      </ImageContainer>

      <ImageContainer>
        <a
          href="https://www.credential.net/de2045b4-0766-49ad-8035-a197846bca6b"
          target="_blank"
        >
          <img
            className="w-52 grayscale"
            src="/certifications/tensorflow-developer-certificate.png"
          />
        </a>
      </ImageContainer>
    </div>
  );
}

function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-2 flex justify-center items-center">
      {children}
    </div>
  );
}
