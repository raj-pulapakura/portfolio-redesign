import SkillSection from './SkillSection';
import { mlskills, dataskills, fullstackskills } from '../../../data/skills';
import CertificationContainer from './CertificationContainer';

export default function GridSmall() {
  return (
    <div className="grid grid-cols-8 gap-x-10 gap-y-20 ">
      <h1 className="text-center font-bold text-3xl text-primary col-span-8">
        / SKILLS & CERTS
      </h1>

      <CertificationContainer>
        <a
          href="https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/f37ed11bbc74f2d"
          target="_blank"
        >
          <img
            className="rounded-lg grayscale"
            src="/certifications/azure-ai-fundamentals.png"
          />
        </a>
      </CertificationContainer>

      <CertificationContainer>
        <a
          href="https://www.credential.net/de2045b4-0766-49ad-8035-a197846bca6b"
          target="_blank"
        >
          <img
            className="w-52 grayscale"
            src="/certifications/tensorflow-developer-certificate.png"
          />
        </a>
      </CertificationContainer>

      <CertificationContainer>
        <a
          href="https://www.credly.com/badges/87092f70-1635-41e6-86aa-79654f1303b5/"
          target="_blank"
        >
          <img
            className="w-52  grayscale"
            src="/certifications/aws-machine-learning-specialty.png"
          />
        </a>
      </CertificationContainer>

      <CertificationContainer>
        <a
          href="https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/1268f0982a05a191"
          target="_blank"
        >
          <img
            className="rounded-lg grayscale"
            src="/certifications/azure-fundamentals.png"
          />
        </a>
      </CertificationContainer>

      <SkillSection
        className="col-span-4"
        title="AI & Machine Learning"
        skills={mlskills}
        align="text-center"
      />
      <SkillSection
        className="col-span-4"
        title="Full Stack Dev"
        skills={fullstackskills}
        align="text-center"
      />
      <SkillSection
        className="col-span-8"
        title="Data, Cloud and Infra"
        skills={dataskills}
        align="text-center"
      />
    </div>
  );
}
