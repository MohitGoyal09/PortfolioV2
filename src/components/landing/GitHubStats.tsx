import React from 'react';
import GitHubContributions from '@/components/ui/GitHubContributions';
import SectionHeading from '@/components/common/SectionHeading';

export default function GitHubStats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          heading="GitHub Activity"
          subHeading="My coding journey visualized through contributions"
        />
        <div className="mt-8">
          <GitHubContributions 
            username="MohitGoyal09" 
            className="w-full"
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Contributions to public repositories • Updated daily</p>
        </div>
      </div>
    </section>
  );
}
