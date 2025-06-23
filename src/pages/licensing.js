import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from './index.module.css';

export default function Licensing() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`RabbitMQ: ${siteConfig.tagline}`}>
      <main>
        <div className={styles.hero}>
          <div className={[styles.container, styles.heroInner].join(' ')}>
            <div>
              <Heading as="h1">Tanzu RabbitMQ<br />Licensing</Heading>
            </div>
          </div>
        </div>

        <div className={styles.supporttypes}>
          <div className={styles.container}>
            <div className={styles.flex_columns}>
              <section>
                <Heading as="h2">Disaster Recovery</Heading>
                <p>Deployments running in different zones or regions can keep their schemas in sync thanks to Warm Standby Replication. If the primary deployment becomes unavailable, clients are able to reconnect to the secondary and continue working with minimal disruption.</p>
              </section>
              <section>
                <Heading as="h2">Cloud cost savings</Heading>
                <p>All network traffic exchanged by nodes in a deployment is compressed by default. For JSON message payloads, bandwidth usage is reduced by 16x. Use the calculator below to see how much you can save in network bandwidth costs.</p>
              </section>
              <section>
                <Heading as="h2">Secure by design</Heading>
                <p>Engage with our partner for licensing and consultants who have localized expertise and specialize in tailoring RabbitMQ solutions to the specific needs of your organization.</p>
              </section>
            </div>
            <Link className="button button--primary" to="mailto:contact-tanzu-data.pdl@broadcom.com">GET QUOTE</Link>
          </div>
        </div>

        <div id="tanzu-rabbitmq" className={styles.license}>
          <div className={styles.container}>
            <Heading as="h1">VMware Tanzu RabbitMQ</Heading>
            <Heading as="h4">Commercial RabbitMQ includes both 24/7 support and enterprise features not included in the open source version</Heading>

            <Tabs>
              <TabItem value="feature-1" label="Enterprise Support" default>
                <Heading as="h2">Around the clock, around the globe support</Heading>
                <div className={styles.flex_columns}>
                  <section>
                    <Heading as="h4">Severity driven SLAs</Heading>
                    <p>Our SLAs ensure that each issue or help request raised is given priority attention. Highest severity issues will receive attention within 30 minutes.</p>
                  </section>
                  <section>
                    <Heading as="h4">Longer support timelines</Heading>
                    <p>Get patches and support for the latest versions for far longer than what is provided to open source users. Enterprises can take their time to upgrade at their own pace.</p>
                  </section>
                  <section>
                    <Heading as="h4">Access to RabbitMQ developers</Heading>
                    <p>Being the stewards of RabbitMQ, our support staff have direct access to the developers of RabbitMQ for expert advice and expedient patches where necessary.</p>
                  </section>
                </div>
              </TabItem>
              <TabItem value="feature-2" label="Advanced Enterprise Features">
                <Heading as="h2">Exclusive capabilities supporting your mission-critical apps</Heading>
                <div className={styles.flex_columns}>
                  <section>
                    <Heading as="h4">Multi-data center disaster recovery</Heading>
                    <p>Seamless schema and data replication to a second data center that enables promotion of a second site in the event of a disaster.</p>
                  </section>
                  <section>
                    <Heading as="h4">Enterprise security</Heading>
                    <p>Enhanced encryption, delegated authentication using OAuth, and TLS certificates from Hashicorp Vault</p>
                  </section>
                  <section>
                    <Heading as="h4">Kubernetes deployments</Heading>
                    <p>Fully automated Kubernetes (K8s) operator and Helmchart that allows for seamless deployment into your K8s ecosystem.</p>
                  </section>
                  <section>
                    <Heading as="h4">Audit Features</Heading>
                    <p>
                    Collection and storage of internal cluster events as structured data (JSON) or in human readable form.
                    Cluster events relevant for audit, for example, what user deleted a queue or stream, are collected separately from the rest.
                    </p>
                  </section>
                </div>
              </TabItem>
            </Tabs>
          </div>
        </div>

        <div id="consulting" className={styles.partners}>
          <div className={styles.container}>
            <Heading as="h1">Managed Service Partner</Heading>
            <div className={styles.partner}>
              <Heading as="h3">AceMQ</Heading>
              <p className={styles.partner_region}>Offices in: 🇺🇸USA &mdash; Supporting organizations worldwide</p>
              <p>AceMQ is a premier Global RabbitMQ partner offering comprehensive support, training, and consulting services for both RabbitMQ Community Edition and RabbitMQ for Tanzu. As a Broadcom authorized managed service provider for Tanzu RabbitMQ, we enable organizations to secure annual or subscription-based licenses under a flexible model, tailored for long-term scalability and compliance.</p>
              <p>With deep experience in deploying and managing RabbitMQ across cloud, on-premises, hybrid, and Kubernetes environments, AceMQ delivers unmatched expertise in architecture design, high-availability clustering, security hardening, and performance optimization. Our team of RabbitMQ specialists empowers businesses across industries—including finance, healthcare, defense, logistics, and SaaS—to build reliable, scalable messaging infrastructure aligned to mission-critical demands.</p>
              <p>Whether you're seeking deployment support, upgrade planning, incident resolution, or help transitioning to licensed RabbitMQ, AceMQ ensures your systems operate with maximum resilience and efficiency. From initial assessments to long-term partnerships, we offer flexible engagement models and global coverage.</p>
              <Heading as="h4">Our services include:</Heading>
              <ul>
                <li><strong>White-glove support.</strong></li>
                <li><strong>Flexible licensing options</strong>, including licensing for small systems with minimual numbers of cores.</li>
                <li><strong>Tailored to Your Business</strong>: AceMQ works with you to design a licensing model that fits your unique messaging needs. Whether you need a small-scale deployment or a global, highly available messaging system, we create the right plan for you.</li>
                <li><strong>Cost-Effective</strong>: Traditional RabbitMQ licensing models often require businesses to pay for features they don’t need. AceMQ's approach ensures that you pay only for what you use, helping you optimize your costs while still getting the robust features and support your organization requires.</li>
                <li><strong>Expert Support</strong>: With AceMQ, you gain access to a team of RabbitMQ experts who can help you troubleshoot, optimize, and scale your RabbitMQ deployment. Whether you are transitioning from an open-source version or scaling an enterprise deployment, our team is here to provide ongoing support and guidance.</li>
                <li><strong>Managed Services</strong>: If you prefer not to handle the day-to-day management of your RabbitMQ environment, AceMQ offers fully managed RabbitMQ services. We handle everything from installation and configuration to ongoing monitoring and maintenance.</li>
                <li><strong>Advanced Security and Compliance</strong>: AceMQ takes security seriously. We offer customized security features, including encryption and advanced access control, to meet the most stringent compliance standards.</li>
                <li><strong>Cloud-Native & Kubernetes Integration</strong>: Our licensing models are flexible enough to accommodate cloud-based deployments, including those running on Kubernetes, Docker, or other containerized environments. This ensures that your RabbitMQ environment can scale seamlessly with your cloud infrastructure.</li>
              </ul>
            </div>
            <Heading as="h4">VMware Tanzu's trusted partners are here to help you in your local market and provide high touch professional services.</Heading>
            <div className={styles.contact_buttons}>
              <Link className="button button--primary" to="mailto:contact-tanzu-data.pdl@broadcom.com">Contact Broadcom </Link>
              <Link className="button button--primary" to="mailto:contact-tanzu-data.pdl@broadcom.com">Contact AceMQ</Link>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}
