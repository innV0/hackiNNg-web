import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Wrench, 
  Presentation, 
  FileText, 
  Bot, 
  Image, 
  Video, 
  Mic, 
  Music, 
  Globe, 
  Zap,
  Palette,
  ChevronRight,
  Clock,
  CheckCircle,
  Copy,
  MousePointer
} from "lucide-react";
import { useState } from "react";
import { downloadProjectTemplate } from "@/utils/downloadTemplate";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const phases = [
    {
      id: 1,
      title: "Formación de Equipos",
      icon: <Users className="h-6 w-6" />,
      description: "Organización de participantes en equipos colaborativos",
      details: "Los participantes se organizan en equipos de 3-5 personas, idealmente con perfiles complementarios (técnico, negocio, diseño). Se fomenta la diversidad de habilidades y experiencias para crear equipos equilibrados que puedan abordar todos los aspectos del proyecto."
    },
    {
      id: 2,
      title: "Elección del Proyecto",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Selección de ideas del catálogo o propuestas propias",
      details: "Los equipos pueden elegir entre las ideas predefinidas del catálogo o proponer sus propias ideas innovadoras. Se valora la originalidad, viabilidad técnica y potencial de impacto. Los mentores ayudan a validar y refinar las propuestas iniciales."
    },
    {
      id: 3,
      title: "Desarrollo del Proyecto",
      icon: <Wrench className="h-6 w-6" />,
      description: "Implementación usando herramientas de IA",
      details: "Fase principal donde los equipos desarrollan sus soluciones utilizando las herramientas de IA disponibles. Se incluye prototipado, validación de conceptos, desarrollo del modelo de negocio y preparación de materiales de presentación. Los mentores proporcionan apoyo técnico y estratégico."
    },
    {
      id: 4,
      title: "Presentación Final",
      icon: <Presentation className="h-6 w-6" />,
      description: "Pitch del proyecto ante jurado y participantes",
      details: "Cada equipo presenta su proyecto en un pitch de 4 minutos seguido de preguntas. Se evalúa la innovación, viabilidad técnica, potencial de mercado y calidad de la presentación. El jurado está compuesto por expertos en IA, emprendimiento y tecnología."
    }
  ];

  const objectives = [
    "Crear un modelo de negocio o business case básico",
    "Aprender y experimentar con herramientas de IA",
    "Fomentar el trabajo en equipo y colaboración",
    "Aprender a exponer y comunicar proyectos"
  ];

  const aiTools = [
    {
      category: "Chatbots & Conversacionales",
      icon: <Bot className="h-5 w-5" />,
      tools: [
        { name: "ChatGPT", description: "Asistente conversacional para texto e imágenes" },
        { name: "Gemini", description: "Chatbot multimodal de Google" }
      ]
    },
    {
      category: "Generación de Imágenes",
      icon: <Image className="h-5 w-5" />,
      tools: [
        { name: "Leonardo.ai", description: "Plataforma avanzada para generar y editar imágenes" }
      ]
    },
    {
      category: "Generación de Vídeo",
      icon: <Video className="h-5 w-5" />,
      tools: [
        { name: "D-ID", description: "Anima fotos para crear avatares parlantes" },
        { name: "OpusClip", description: "Extrae clips cortos de vídeos largos" },
        { name: "Kling AI", description: "Genera vídeos de alta calidad a partir de texto" }
      ]
    },
    {
      category: "Generación de Voz",
      icon: <Mic className="h-5 w-5" />,
      tools: [
        { name: "ElevenLabs", description: "Genera y clona voces realistas" }
      ]
    },
    {
      category: "Generación de Música",
      icon: <Music className="h-5 w-5" />,
      tools: [
        { name: "Suno", description: "Crea canciones completas a partir de texto" }
      ]
    },
    {
      category: "Sitios Web y Apps",
      icon: <Globe className="h-5 w-5" />,
      tools: [
        { name: "Lovable", description: "Crea sitios web mediante prompts" },
        { name: "v0.dev", description: "Genera interfaces de usuario y código" }
      ]
    },
    {
      category: "Productividad",
      icon: <Zap className="h-5 w-5" />,
      tools: [
        { name: "Otter.ai", description: "Transcribe y resume reuniones" },
        { name: "n8n", description: "Automatiza flujos de trabajo" }
      ]
    },
    {
      category: "Diseño e Investigación",
      icon: <Palette className="h-5 w-5" />,
      tools: [
        { name: "Gamma", description: "Genera presentaciones inteligentes" },
        { name: "Perplexity", description: "Motor de búsqueda conversacional" }
      ]
    }
  ];

  const projectIdeas = [
    {
      title: "SaaS de Gestión de Contratos Inteligente",
      description: "Plataforma que utiliza IA para automatizar la creación, revisión y gestión de contratos empresariales.",
      details: "Sistema que analiza automáticamente cláusulas contractuales, sugiere mejoras, detecta riesgos y facilita la negociación mediante IA conversacional."
    },
    {
      title: "Plataforma de Onboarding Automatizado",
      description: "Solución de IA para personalizar y automatizar procesos de incorporación de empleados.",
      details: "Chatbot inteligente que guía a nuevos empleados, genera material formativo personalizado y adapta el proceso según el rol y experiencia."
    },
    {
      title: "Marketplace de Servicios de IA",
      description: "Plataforma que conecta empresas con soluciones de IA especializadas.",
      details: "Ecosistema donde empresas pueden encontrar y contratar servicios específicos de IA, con sistema de recomendaciones y validación de calidad."
    },
    {
      title: "Asistente de Negociación de Contratos",
      description: "IA que asiste en negociaciones comerciales analizando términos y sugiriendo estrategias.",
      details: "Herramienta que analiza historiales de negociación, identifica patrones exitosos y proporciona recomendaciones tácticas en tiempo real."
    },
    {
      title: "Micro-Consultorías On-Demand",
      description: "Plataforma que conecta expertos con empresas para consultoría inmediata.",
      details: "Sistema de matching inteligente que conecta empresas con consultores especializados para sesiones cortas y específicas de resolución de problemas."
    },
    {
      title: "Reservas Instantáneas de Espacios",
      description: "Sistema de IA para optimizar la reserva y uso de espacios corporativos.",
      details: "Plataforma que predice demanda de espacios, optimiza asignaciones y facilita reservas automáticas basadas en patrones de uso y preferencias."
    },
    {
      title: "Kit de Inmersión Lingüística",
      description: "Solución de IA para aprendizaje personalizado de idiomas en contextos profesionales.",
      details: "Sistema que crea experiencias de aprendizaje inmersivas usando IA conversacional, reconocimiento de voz y generación de contenido contextual."
    },
    {
      title: "Agrupador de Opiniones B2B",
      description: "Plataforma que recopila y analiza feedback de clientes empresariales usando IA.",
      details: "Herramienta que consolida opiniones de múltiples canales, identifica tendencias y genera insights accionables para mejora de productos/servicios."
    },
    {
      title: "Marketplace de Creativos Freelance",
      description: "Plataforma con IA para matching óptimo entre proyectos creativos y freelancers.",
      details: "Sistema que analiza portfolios, estilos creativos y requirements de proyectos para generar matches perfectos y facilitar colaboraciones."
    },
    {
      title: "Carsharing Corporativo Interno",
      description: "Sistema de IA para optimizar el uso compartido de vehículos corporativos.",
      details: "Plataforma que gestiona reservas, optimiza rutas, predice demanda y facilita el uso eficiente de la flota corporativa."
    },
    {
      title: "Gestión de Contratos con Influencers",
      description: "Herramienta de IA para automatizar y optimizar colaboraciones con influencers.",
      details: "Sistema que analiza métricas de influencers, automatiza negociaciones, gestiona contratos y mide ROI de campañas de marketing de influencia."
    }
  ];

  const templateContent = `# Documento de Trabajo del Proyecto - Sesión de Trabajo de IA

## Equipo
| Nombre | Rol | E-mail |
|--------|-----|--------|
| [Nombre del miembro 1] | [Rol del miembro 1] | [Email del miembro 1] |
| [Nombre del miembro 2] | [Rol del miembro 2] | [Email del miembro 2] |
| [Nombre del miembro 3] | [Rol del miembro 3] | [Email del miembro 3] |

## Modelo de negocio

### Cliente
Descripción detallada del cliente objetivo.

### Problema
Descripción clara del problema, necesidad o deseo que se está resolviendo y su impacto en el cliente.

### Solución
Descripción de la solución propuesta. ¿Qué herramientas de IA utiliza y cómo? ¿Qué valor aportan?

### Propuesta de valor
Beneficios únicos que ofrece la solución y por qué el cliente la elegiría sobre otras.

## Anexos
Espacio para investigación de mercado, análisis de competencia, material de apoyo, etc.

---

## Estructura del Pitch (4 minutos)

1. **Introducción (20 segundos):** Saludo y resumen del problema que abordáis.
2. **Descripción del problema (1 minuto):** ¿Quién es vuestro cliente y qué problema tiene?
3. **Descripción de la solución (2 minutos):** Explicad cómo funciona vuestra solución, las tecnologías de IA utilizadas, la propuesta de valor y, si es posible, mostrad una demo.
4. **Plan (30 segundos):** Mencionad los próximos pasos o posibles mejoras.
5. **Conclusión (30 segundos):** Resumid los puntos clave de vuestro proyecto.

---

Documento generado por hackiNNg.guide`;

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(templateContent);
      console.log('Plantilla copiada al portapapeles');
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">hackiNNg.guide</h1>
                <p className="text-sm text-muted-foreground">Guía del Participante</p>
              </div>
            </div>
            <Badge variant="outline" className="hidden md:flex">
              <Clock className="h-3 w-3 mr-1" />
              Sesión de Trabajo de IA
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Guía Completa de la Sesión de Trabajo de IA
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Una experiencia intensiva y colaborativa para crear soluciones innovadoras con inteligencia artificial
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Plantilla
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center text-xl">
                      <FileText className="h-5 w-5 mr-2" />
                      Plantilla del Proyecto
                    </DialogTitle>
                    <DialogDescription>
                      Copia este contenido y pégalo en tu documento de trabajo
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">Contenido de la plantilla:</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopyTemplate}
                          className="flex items-center gap-2"
                        >
                          <Copy className="h-3 w-3" />
                          Copiar todo
                        </Button>
                      </div>
                      <pre className="text-sm whitespace-pre-wrap font-mono bg-background p-4 rounded border max-h-96 overflow-y-auto">
                        {templateContent}
                      </pre>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Instrucciones:</h4>
                      <ol className="text-sm text-blue-800 space-y-1">
                        <li>1. Haz clic en "Copiar todo" para copiar la plantilla completa</li>
                        <li>2. Pega el contenido en tu editor de texto favorito (Word, Google Docs, Notion, etc.)</li>
                        <li>3. Completa cada sección con la información de tu proyecto</li>
                        <li>4. Usa esta plantilla como guía durante toda la sesión de trabajo</li>
                      </ol>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 mr-3 text-primary" />
              Objetivos de la Sesión de Trabajo
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estos son los principales objetivos que perseguimos durante esta experiencia intensiva
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Phases Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Fases de la Sesión de Trabajo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La sesión de trabajo se estructura en cuatro fases que guían desde la concepción hasta la presentación
            </p>
            <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center">
              <MousePointer className="h-4 w-4 mr-1" />
              Haz clic en cada fase para ver más detalles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <Dialog key={phase.id}>
                <DialogTrigger asChild>
                  <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 text-primary p-2 rounded-lg">
                          {phase.icon}
                        </div>
                        <Badge variant="secondary">Fase {phase.id}</Badge>
                      </div>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {phase.description}
                      </CardDescription>
                    </CardContent>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center text-xl">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                        {phase.icon}
                      </div>
                      Fase {phase.id}: {phase.title}
                    </DialogTitle>
                    <DialogDescription>
                      {phase.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {phase.details}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Project Template Section */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-3 text-primary" />
                Documento de Trabajo del Proyecto
              </CardTitle>
              <CardDescription>
                Plantilla central para guiar el desarrollo de vuestro proyecto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">Estructura del Documento:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium">Equipo:</span>
                    <span className="text-sm text-muted-foreground">Roles, nombres y contactos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="font-medium">Modelo de negocio:</span>
                    <span className="text-sm text-muted-foreground">Cliente, problema, solución y propuesta de valor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Anexos:</span>
                    <span className="text-sm text-muted-foreground">Investigación y material de apoyo</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-3 text-primary">Estructura del Pitch (4 minutos):</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>• Introducción (20s)</div>
                  <div>• Descripción del problema (1min)</div>
                  <div>• Descripción de la solución (2min)</div>
                  <div>• Plan y conclusión (1min)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Tools Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Herramientas de IA Recomendadas</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Catálogo de herramientas de IA generativa para potenciar vuestros proyectos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                      {category.icon}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border-l-2 border-primary/20 pl-3">
                        <div className="font-medium text-sm">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Ideas Section */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="h-6 w-6 mr-3 text-primary" />
                Catálogo de Ideas para Proyectos
              </CardTitle>
              <CardDescription>
                Ideas inspiradoras para comenzar vuestro proyecto de sesión de trabajo
              </CardDescription>
              <p className="text-sm text-muted-foreground flex items-center">
                <MousePointer className="h-4 w-4 mr-1" />
                Haz clic en cada idea para ver más detalles
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {projectIdeas.map((idea, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                        <div className="bg-primary/20 text-primary p-1.5 rounded group-hover:bg-primary/30 transition-colors">
                          <ChevronRight className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-medium">{idea.title}</span>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center text-xl">
                          <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                          {idea.title}
                        </DialogTitle>
                        <DialogDescription>
                          {idea.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Descripción detallada:</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {idea.details}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Roles Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Roles en la Sesión de Trabajo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diferentes responsabilidades para asegurar el éxito del evento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Facilitador</CardTitle>
                <CardDescription>Guía el proceso general de la sesión de trabajo</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 text-green-600 p-3 rounded-full w-fit mx-auto mb-3">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle>Mentor</CardTitle>
                <CardDescription>Ofrece asesoramiento técnico y de negocio</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-fit mx-auto mb-3">
                  <Wrench className="h-6 w-6" />
                </div>
                <CardTitle>Participante</CardTitle>
                <CardDescription>Colabora activamente en el desarrollo</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Usa la plantilla del proyecto para desarrollar tu idea innovadora con IA
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
                <FileText className="h-4 w-4 mr-2" />
                Ver Plantilla
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center text-xl">
                  <FileText className="h-5 w-5 mr-2" />
                  Plantilla del Proyecto
                </DialogTitle>
                <DialogDescription>
                  Copia este contenido y pégalo en tu documento de trabajo
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Contenido de la plantilla:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyTemplate}
                      className="flex items-center gap-2"
                    >
                      <Copy className="h-3 w-3" />
                      Copiar todo
                    </Button>
                  </div>
                  <pre className="text-sm whitespace-pre-wrap font-mono bg-background p-4 rounded border max-h-96 overflow-y-auto">
                    {templateContent}
                  </pre>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Instrucciones:</h4>
                  <ol className="text-sm text-blue-800 space-y-1">
                    <li>1. Haz clic en "Copiar todo" para copiar la plantilla completa</li>
                    <li>2. Pega el contenido en tu editor de texto favorito (Word, Google Docs, Notion, etc.)</li>
                    <li>3. Completa cada sección con la información de tu proyecto</li>
                    <li>4. Usa esta plantilla como guía durante toda la sesión de trabajo</li>
                  </ol>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </div>
    </div>
  );
};

export default Index;
