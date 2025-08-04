import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [grade, setGrade] = useState("");
  const [language, setLanguage] = useState("");

  const handleGenerateGame = () => {
    if (!topic || !grade || !language) {
      alert("Please fill all fields");
      return;
    }
    console.log("Generating game for:", { topic, grade, language });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            LearnAny POC
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Create Learning Game
                </h2>
                <p className="text-muted-foreground text-sm">
                  Generate an educational game for any topic
                </p>
              </div>

              <div className="space-y-4">
                {/* Topic Input */}
                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium text-foreground">
                    Topic
                  </label>
                  <Input
                    id="topic"
                    placeholder="Enter topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Grade Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Grade
                  </label>
                  <Select value={grade} onValueChange={setGrade}>
                    <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover/95 backdrop-blur-sm border-border/50">
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((gradeNum) => (
                        <SelectItem key={gradeNum} value={gradeNum.toString()}>
                          Grade {gradeNum}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Language Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Language
                  </label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover/95 backdrop-blur-sm border-border/50">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="mr">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={handleGenerateGame}
                  variant="learning"
                  size="lg"
                  className="w-full mt-8 font-semibold"
                >
                  Generate Game
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;