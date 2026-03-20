import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um software personalizado?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Projetos menores podem ser entregues em 4 a 8 semanas, enquanto soluções mais robustas levam de 3 a 6 meses. Sempre fornecemos um cronograma detalhado antes de iniciar.",
  },
  {
    question: "Vocês trabalham com empresas de qual porte?",
    answer: "Atendemos desde startups em fase de validação até empresas de grande porte. Nosso método se adapta à realidade de cada cliente, independentemente do tamanho.",
  },
  {
    question: "O que está incluso no suporte pós-entrega?",
    answer: "Oferecemos suporte técnico contínuo que inclui correção de bugs, ajustes de performance, atualizações de segurança e evolução do sistema conforme novas necessidades surgem.",
  },
  {
    question: "Posso acompanhar o desenvolvimento do meu projeto?",
    answer: "Sim. Trabalhamos com ciclos curtos de entrega e você recebe acesso a versões parciais do sistema para validar cada funcionalidade antes de avançar.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Escolhemos a melhor stack para cada projeto. Trabalhamos com React, Next.js, Node.js, Python, PostgreSQL, AWS, Azure e outras tecnologias líderes de mercado.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tire suas dúvidas sobre como trabalhamos e o que esperar de um projeto com a Insiderblue.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
