"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type Phobia } from "@/lib/phobias"

interface PhobiaGeneratorProps {
  phobia: Phobia | null;
  isLoading: boolean;
}

export default function PhobiaGenerator({ phobia, isLoading }: PhobiaGeneratorProps) {
  return (
    <div className="w-full max-w-md relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
          Random Phobias
        </h1>
        <p className="text-slate-300">Discover and learn about different phobias</p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={phobia?.name || "loading"}
        >
          <Card className="bg-slate-800/60 border-slate-700/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {isLoading ? (
                  <div className="h-8 w-3/4 mx-auto bg-slate-700 animate-pulse rounded"></div>
                ) : (
                  phobia?.name
                )}
              </CardTitle>
              <CardDescription className="text-center text-slate-300">
                {isLoading ? "Loading..." : "Fear of..."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-4 bg-slate-700 animate-pulse rounded"></div>
                  <div className="h-4 bg-slate-700 animate-pulse rounded"></div>
                  <div className="h-4 bg-slate-700 animate-pulse rounded w-3/4"></div>
                </div>
              ) : (
                <p className="text-slate-300 text-center leading-relaxed">{phobia?.description}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
