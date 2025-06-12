
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const phases = [
    {
      id: 1,
      title: "Formación de Equipos",
      icon: <Users className="h-6 w-6" />,
      description: "Organización de participantes en equipos colaborativos"
    },
    {
      id: 2,
      title: "Elección del Proyecto",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Selección de ideas del catálogo o propuestas propias"
    },
    {
      id: 3,
      title: "Desarrollo del Proyecto",
      icon: <Wrench className="h-6 w-6" />,
      description: "Implementación usando herramientas de IA"
    },
    {
      id: 4,
      title: "Presentación Final",
      icon: <Presentation className="h-6 w-6" />,
      description: "Pitch del proyecto ante jurado y participantes"
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
    "SaaS de Gestión de Contratos Inteligente",
    "Plataforma de Onboarding Automatizado",
    "Marketplace de Servicios de IA",
    "Asistente de Negociación de Contratos",
    "Micro-Consultorías On-Demand",
    "Reservas Instantáneas de Espacios",
    "Kit de Inmersión Lingüística",
    "Agrupador de Opiniones B2B",
    "Marketplace de Creativos Freelance",
    "Carsharing Corporativo Interno",
    "Gestión de Contratos con Influencers"
  ];

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
              Hackathon de IA
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Guía Completa del Hackathon de IA
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Una experiencia intensiva y colaborativa para crear soluciones innovadoras con inteligencia artificial
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
                Comenzar Hackathon
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="h-4 w-4 mr-2" />
                Descargar Plantilla
              </Button>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 mr-3 text-primary" />
              Objetivos del Hackathon
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
            <h3 className="text-3xl font-bold mb-4">Fases del Hackathon</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              El hackathon se estructura en cuatro fases que guían desde la concepción hasta la presentación
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <Card key={phase.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
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
                Ideas inspiradoras para comenzar vuestro proyecto de hackathon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {projectIdeas.map((idea, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/20 text-primary p-1.5 rounded">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium">{idea}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Roles Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Roles en el Hackathon</h3>
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
                <CardDescription>Guía el proceso general del hackathon</CardDescription>
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
            Descarga la plantilla del proyecto y comienza a desarrollar tu idea innovadora con IA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
              <FileText className="h-4 w-4 mr-2" />
              Descargar Plantilla
            </Button>
            <Button variant="outline" size="lg">
              Contactar Mentores
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
